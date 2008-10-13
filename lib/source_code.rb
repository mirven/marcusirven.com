module SourceCodeHelper
  def source_code(lang, line_numbers, &proc)    
    # uv(:lang => lang, :line_numbers => line_numbers, :theme => "active4d", proc.binding)
  end
end  

Webby::Helpers.register(SourceCodeHelper)
