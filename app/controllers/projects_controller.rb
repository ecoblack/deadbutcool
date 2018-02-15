class ProjectsController < ApplicationController

def index
    @projects = Project.all

  end

  # GET /products/1
  # GET /products/1.json
  def show
    @project = Project.find(params[:id])
    
  end

end
