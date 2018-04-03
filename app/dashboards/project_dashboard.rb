require "administrate/base_dashboard"

class ProjectDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    image_file_name: Field::String,
    image_content_type: Field::String,
    image_file_size: Field::Number,
    image_updated_at: Field::DateTime,
    title: Field::String,
    description: Field::Text,
    link: Field::String,
    credits: Field::Text,
    brand: Field::String,
    slug: Field::String,
    link0: Field::String,
    credit1: Field::String,
    link1: Field::String,
    credit2: Field::String,
    link2: Field::String,
    credit3: Field::String,
    link3: Field::String,
    credit4: Field::String,
    link4: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :created_at,
    :updated_at,
    :image_file_name,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :created_at,
    :updated_at,
    :image_file_name,
    :image_content_type,
    :image_file_size,
    :image_updated_at,
    :title,
    :description,
    :link,
    :credits,
    :brand,
    :slug,
    :link0,
    :credit1,
    :link1,
    :credit2,
    :link2,
    :credit3,
    :link3,
    :credit4,
    :link4,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :image_file_name,
    :image_content_type,
    :image_file_size,
    :image_updated_at,
    :title,
    :description,
    :link,
    :credits,
    :brand,
    :slug,
    :link0,
    :credit1,
    :link1,
    :credit2,
    :link2,
    :credit3,
    :link3,
    :credit4,
    :link4,
  ].freeze

  # Overwrite this method to customize how projects are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(project)
  #   "Project ##{project.id}"
  # end
end
