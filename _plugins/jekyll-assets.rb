require "jekyll-assets"
require "image_optim"

image_optim = ImageOptim.new(pngout: false, svgo: false)
processor   = proc { |_, data| image_optim.optimize_image_data(data) || data }

%w(image/gif image/jpeg image/png image/svg+xml).each do |type|
  Sprockets.register_preprocessor type, :image_optim, &processor
end
