import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NavArrowUp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const NavArrowUp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L12 9L18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
