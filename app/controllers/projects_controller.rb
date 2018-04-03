class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  respond_to :html, :js
  # GET /projects
  # GET /projects.json
  def index
    
  @projects = Project.all
  respond_to do |format|
      format.html { render 'projects/index' }
      format.js
    end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
   @project = Project.friendly.find(params[:title])
  # @credits = JSON.parse(@project.credits)
  respond_to do |format|
      format.html { render 'projects/show' }
      format.js
  end
  end


  # GET /projects/new

def edit
    @project = Project.find params[:id]
  end

  # POST /products
  # POST /products.json
  def create
    @project = Project.new(product_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    @project.category_id = params[:category_id]
    respond_to do |format|
      if @project.update(product_params)
        format.html { redirect_to @project, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  # POST /projects
  # POST /projects.json


  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json

  # DELETE /projects/1
  # DELETE /projects/1.json


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
     
     @project = Project.friendly.find(params[:title])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.fetch(:project, {})
    end
end