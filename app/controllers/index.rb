before do
  @user ||= User.find(session[:user_id])
end

get '/' do
  # Look in app/views/index.erb
  haml :index, :layout_engine => :erb
end

get '/login' do
  haml :login, :layout_engine => :erb, :layout => !request.xhr?
end

get 'signup' do
  haml :signup, :layout_engine => :erb, :layout => !request.xhr?
end

post '/login' do
  user = User.find_by_email(params[:login][:email])
  if user.authenticate(params[:login][:password])
    session[:user_id] = user.id
  end
end