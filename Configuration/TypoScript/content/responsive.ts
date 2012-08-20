#	--------------------------------------------------
#   	configure TYPO3 for responsive content rendering
#	--------------------------------------------------

// images without style attributes
tt_content.image.20 {
	imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap"> | </div>
	imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn"> | </div>
}

// rendering for content elements without style attributes
tt_content.image.20 {
	rendering {
    	dl {
      		imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
      		imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
      		oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" > | </dl>
    	}
    	ul {
      		imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"><ul> | </ul></div>
      		imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"><ul> | </ul></div>
      		oneImageStdWrap.dataWrap = <li class="csc-textpic-image###CLASSES###"> | </li>
    	}
    	div {
      		imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
      		imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
      		oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###"> | </div>
    	}
    	simple {
      		imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap csc-textpic-single-image"> | </div>
    	}
  	}
}

// Rendering of image-captions set to HTML5
tt_content.image.20 {
  renderMethod = figure
  rendering {
	figure {
	  imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
	  imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
	  noRowsStdWrap.wrap =
	  oneImageStdWrap.dataWrap = <figure style="max-width:{register:rowwidth}px;"> | </figure>
	  imgTagStdWrap.wrap =   |
	  editIconsStdWrap.wrap = <div> | </div>
	  caption.wrap = <figcaption> | </figcaption>
	  caption.required = 1
	}
  }
}