
get '/' do
  # Look in app/views/index.erb
  haml :index, :layout_engine => :erb
end


