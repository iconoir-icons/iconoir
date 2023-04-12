import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowsUpFromLine extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowsUpFromLine({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20L21 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 17L6 4M6 4L2 8M6 4L10 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 17V4M18 4L14 8M18 4L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
