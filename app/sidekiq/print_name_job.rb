class PrintNameJob
  include Sidekiq::Job

  def perform(*args)
    puts "Hello name"
  end
end
