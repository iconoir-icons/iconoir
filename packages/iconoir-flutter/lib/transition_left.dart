import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TransitionLeft extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TransitionLeft({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 18V6C22 4.34315 20.6569 3 19 3H17C15.3431 3 14 4.34315 14 6V18C14 19.6569 15.3431 21 17 21H19C20.6569 21 22 19.6569 22 18Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M8 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12H6M6 12L9 9M6 12L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
