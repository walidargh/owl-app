class Api::BusinessesController < ApplicationController
	def index
		@businesses = Business.all
	end

	def create
		full_params = business_params
		full_params[:user_id] = current_user.id
		@business = Business.new(full_params)
		if @business.save
			tag_ids = params[:business][:tag_ids]

			if (tag_ids.present?)
				tag_ids.each do |tag_id|
					Tagging.create(business_id: @business.id, tag_id: tag_id.to_i)
				end
			end

			render :show
		else
			@errors = @business.errors.full_messages
			render json: @errors, status: 422

		end

	end

	def show 
		@business = Business.find(params[:id])
		if @business
			
		else
			@errors = @business.errors.full_messages
			render json: @errors, status: 404
		end
	end

	def search
		hoods = params[:hoods] || ['Diagon Alley', 'Carkitt', 'Knockturn Alley', 'Hogsmeade', 'Horizont Alley']
		prices = params[:prices] || [1, 2, 3]
		prices = prices.map(&:to_i)
		puts params
		if params[:query].present?
			if params[:tag_ids].present?
				tag_ids = params[:tag_ids].map(&:to_i)
				@businesses = Business.joins(:taggings)
															.where("taggings.tag_id IN (?) AND businesses.address IN (?) lower(businesses.name) ~ ? AND businesses.price IN (?)", 
															tag_ids, hoods, params[:query].downcase, prices)
				puts "query and tags"
			else
				 @businesses = Business.where("lower(name) ~ ? AND businesses.address IN (?) AND businesses.price IN (?)", params[:query].downcase, hoods, prices)
				 puts "just query"
			end
			render :index
		else
			if params[:tag_ids].present?
				@businesses = Business.joins(:taggings).where("taggings.tag_id IN (?) AND businesses.address IN (?) AND businesses.price IN (?)", params[:tag_ids], hoods, prices)
				puts "just tags"
			else
				@businesses = Business.joins(:taggings).where("businesses.address IN (?) AND businesses.price IN (?)", hoods, prices)
				puts "nothing"
			end
			render :index
		end
	end

	def filter
		if params[:tag_ids].present?
			if params[:query].present?	
				@businesses = Business.includes(:taggings).where("taggings.tag_id IN ? and params[:tag_ids], lower(name) ~ ?", params[:tag_ids], params[:query].downcase)
			else
				@businesses = Business.includes(:taggings).where("taggings.tag_id" => params[:tag_ids])
			end
			render :index
		else
			if params[:query].present?
				@businesses = Business.where("lower(name) ~ ?", params[:query].downcase)
			else
				@businesses = Business.all
			end
			render :index
		end
	end

	private 
	def business_params
		params.require(:business).permit(:name, :address, :hours, :price)
	end

end
