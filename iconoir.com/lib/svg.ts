const HEADER = '<?xml version="1.0" encoding="UTF-8"?>';

export function svgToDataUrl(svg: string) {
  // RFC 2397: encode as a URI component so `#`, `<`, non-Latin1, etc. stay valid.
  // `btoa` is Latin-1 only and breaks Safari/Arc downloads for some SVGs (#515).
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/** Turns a rendered icon's markup into a standalone SVG with color and stroke baked in. */
export function bakeSvg(
  svgString: string,
  color: string,
  strokeWidth: string | number,
) {
  // Serialized SVG from the DOM already includes stroke-width on stroked
  // elements; blindly appending after stroke="currentColor" duplicates the
  // attribute and breaks strict XML parsers (e.g. network-* icons).
  const withoutStrokeWidth = svgString.replace(
    /\sstroke-width=(["'])[^"']*\1/g,
    '',
  );

  return (
    HEADER
    + withoutStrokeWidth
      .replace(
        /stroke="currentColor"/g,
        `stroke="currentColor" stroke-width="${strokeWidth}"`,
      )
      .replace(/currentColor/g, color)
  );
}

function triggerDownload(href: string, filename: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function downloadSvg(svg: string, name: string) {
  triggerDownload(svgToDataUrl(svg), `${name}.svg`);
}

/** Rasterizes the SVG at `size`×`size` and downloads it as a PNG. */
export function downloadPng(svg: string, name: string, size = 512) {
  // Render the vector at full size rather than upscaling a small bitmap.
  const sized = svg
    .replace(/(<svg[^>]*?)\swidth="[^"]*"/, `$1 width="${size}"`)
    .replace(/(<svg[^>]*?)\sheight="[^"]*"/, `$1 height="${size}"`);

  const image = new Image();

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    canvas.getContext('2d')?.drawImage(image, 0, 0, size, size);
    triggerDownload(canvas.toDataURL('image/png'), `${name}.png`);
  };

  image.src = svgToDataUrl(sized);
}
