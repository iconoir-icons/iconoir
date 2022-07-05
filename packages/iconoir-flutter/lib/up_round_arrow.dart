import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UpRoundArrow extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UpRoundArrow({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 13.25L12 10.75L9.5 13.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15V9C2 6.79086 3.79086 5 6 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
