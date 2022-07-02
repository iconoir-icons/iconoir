import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InputOutput extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const InputOutput({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19C17.866 19 21 15.866 21 12C21 8.13401 17.866 5 14 5C10.134 5 7 8.13401 7 12C7 15.866 10.134 19 14 19Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19L3 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
