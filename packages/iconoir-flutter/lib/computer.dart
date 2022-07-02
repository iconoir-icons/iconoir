import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Computer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Computer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21L17 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L22 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
