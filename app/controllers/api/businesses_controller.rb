class Api::BusinessesController < ApplicationController
	def index
		@ratings = Business.rating
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
		@ratings = Business.rating

		if params[:query].present?
			businesses = Business.where("lower(name) ~ ?", params[:query])
		else
			businesses = Business
		end

		if params[:hoods].present?
			businesses = businesses.where("businesses.address IN (?)", params[:hoods])
		end

		if params[:prices].present? 
			prices = params[:prices].map(&:to_i)
			businesses = businesses.where("businesses.price IN (?)", prices)
		end

		if params[:tag_ids].present?
			tag_ids = params[:tag_ids].map(&:to_i)
			businesses = businesses.joins(:taggings).where("taggings.tag_id IN (?)", tag_ids)
		end

		@businesses = businesses.all
		render :index
	end

	def filter
		if params[:tag_ids].present?
			if params[:query].present?	
				@businesses = Business.includes(:taggings).where("taggings.tag_id IN ? and params[:tag_ids] AND lower(name) ~ ?", params[:tag_ids], params[:query].downcase)
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
