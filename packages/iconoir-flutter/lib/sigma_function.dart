import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SigmaFunction extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SigmaFunction({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L12 4L20 4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20H12H20V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L12 12L4 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
