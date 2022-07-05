import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UndoAction extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UndoAction({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7V9.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.875 9.5H14.875C20.375 9.5 20.375 18 14.875 18C11.875 18 4.875 18 4.875 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.375 13L7.875 9.5L11.375 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
