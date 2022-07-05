import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RedoAction extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RedoAction({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V9.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9.5C16 9.5 12 9.5 9 9.5C3.5 9.5 3.5 18 9 18C12 18 19 18 19 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 13L16 9.5L12.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
