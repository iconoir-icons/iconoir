import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Redo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Redo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9.5C15.5 9.5 12.5 9.5 9 9.5C8.83847 9.5 5 9.5 5 13.5C5 18 8.70237 18 9 18C12 18 14 18 17 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 13C16.8668 11.6332 17.6332 10.8668 19 9.5C17.6332 8.13317 16.8668 7.36683 15.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
