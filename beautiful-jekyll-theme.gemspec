# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "beautiful-jekyll-theme"
  spec.version       = "6.0.1"
  spec.authors       = ["Pragati Agrawal"]
  spec.email         = ["pragr789@gmail.com"]

  spec.summary       = "Pragati's home page"
  spec.homepage      = "https://github.com/apragati22/apragati22.github.io"
  spec.license       = ""



  spec.add_runtime_dependency "jekyll", ">= 3.9.3"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"
  spec.add_runtime_dependency "kramdown", "~> 2.3"
  spec.add_runtime_dependency "webrick", "~> 1.8"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
  spec.add_development_dependency "appraisal", "~> 2.5"
end
