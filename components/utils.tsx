

export function CenteredImage({ src, alt, width = 450 })  {

    return (
        <div className="flex justify-center">
        <img src={src} alt={alt} width={width} />
      </div>
    )
  }


  