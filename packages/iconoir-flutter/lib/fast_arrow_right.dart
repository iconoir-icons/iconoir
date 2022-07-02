import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FastArrowRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FastArrowRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L10.5 11.5L7 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 8L16.5 11.5L13 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
