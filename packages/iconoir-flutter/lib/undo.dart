import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Undo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Undo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.5C8.5 9.5 11.5 9.5 15 9.5C15.1615 9.5 19 9.5 19 13.5C19 18 15.2976 18 15 18C12 18 10 18 7 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 13C7.13317 11.6332 6.36683 10.8668 5 9.5C6.36683 8.13317 7.13317 7.36683 8.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
