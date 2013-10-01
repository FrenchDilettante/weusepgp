require 'rubygems'
require 'sinatra'

get '/' do
  haml :index
end

get "/style.css" do
  sass :style
end
