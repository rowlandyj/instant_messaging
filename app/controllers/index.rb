before do
  @current_user = User.find(session[:user_id]) if session[:user_id]
end

get '/' do
  haml :index
end

get '/login' do
  haml :login, :layout => !request.xhr?
end

get '/signup' do
  haml :signup, :layout => !request.xhr?
end

post '/login' do
  p params[:login][:password]
  user = User.find_by_email(params[:login][:email])
  if user.authenticate(params[:login][:password])
    session[:user_id] = user.id
  end
  redirect '/'
end

post '/signup' do
  user = User.create(params[:user])
  session[:user_id] = user.id
  redirect '/chat'
end

get '/chat' do
  require 'pusher'
  Pusher.url = "http://689254ed9305f00ed841:81af06251707b86ba97c@api.pusherapp.com/apps/49336"
  Pusher['chat'].trigger('my_event', {
    message: 'WAKA WAKA'
    })
  haml :chat, :layout => !request.xhr?
end