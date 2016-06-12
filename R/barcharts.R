#' Bar Charts.
#'
#' Create a bar chart based on ECharts 3.0.
#'
#'
#' @param message A dataframe.
#' @param width,height nada.
#' @return A bar chart based on ECharts 3.0.
#'
#'
#' @import htmlwidgets
#'
#' @export
barcharts <- function(message, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    message = message
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'barcharts',
    x,
    width = width,
    height = height,
    package = 'barcharts'
  )
}

#' Shiny bindings for barcharts
#'
#' Output and render functions for using barcharts within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a barcharts
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name barcharts-shiny
#'
#' @export
barchartsOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'barcharts', width, height, package = 'barcharts')
}

#' @rdname barcharts-shiny
#' @export
renderBarcharts <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, barchartsOutput, env, quoted = TRUE)
}
