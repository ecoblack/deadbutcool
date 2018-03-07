class ProjectsController < ApplicationController
  before_action :set_project, only: [:show]
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
  @project = Project.find(params[:id])
    
  respond_to do |format|
      format.html { render 'projects/show' }
      format.js
  end
  end


  # GET /projects/new
  def new
    @project = Project.new
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
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.fetch(:project, {})
    end
end
