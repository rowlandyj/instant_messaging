before do
  @current_user = User.find(session[:user_id]) if session[:user_id]
end

get "post/new" do
  haml :new_post, :layout => !request.xhr?
end