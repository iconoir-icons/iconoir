import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HorizontalMerge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HorizontalMerge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H14M14 12L17.5 8.5M14 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H10M10 12L6.5 8.5M10 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21L10 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 21L14 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
