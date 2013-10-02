require 'rubygems'
require 'json'
require 'sass'
require 'sinatra'

get '/' do
  @howtos = JSON.parse(File.read("howtos.json"))
  haml :index
end

get "/style.css" do
  sass :style
end
