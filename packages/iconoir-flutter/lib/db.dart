import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Db extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Db({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12" stroke="currentColor" stroke-width="1.5"/>
<path d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6" stroke="currentColor" stroke-width="1.5"/>
<path d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
