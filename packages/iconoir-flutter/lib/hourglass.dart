import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hourglass extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hourglass({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C15.3137 12 18 9.31371 18 6H6C6 9.31371 8.68629 12 12 12ZM12 12C15.3137 12 18 14.6863 18 18H6C6 14.6863 8.68629 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 3L12 3L18 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21H12L18 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
