require 'rubygems'

require 'i18n'
require 'json'
require 'sass'
require 'sinatra'

I18n.load_path += Dir[File.join(settings.root, 'tr', '*.yml')]

helpers do
  def t code
    I18n.t code
  end
end

def home
  I18n.backend.load_translations
  @howtos = JSON.parse(File.read("howtos.json"))
  haml :index
end

get '/' do
  I18n.locale = "en"
  home
end

get "/style.css" do
  sass :style
end

get "/:lng" do
  unless ["en","fr"].index params[:lng]
    # 404
    return
  end

  I18n.locale = params[:lng]
  home
end
