import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Male extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Male({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2323 9.74707C13.1474 8.66733 11.6516 8 10 8C6.68629 8 4 10.6863 4 14C4 17.3137 6.68629 20 10 20C13.3137 20 16 17.3137 16 14C16 12.3379 15.3242 10.8337 14.2323 9.74707ZM14.2323 9.74707L20 4M20 4H16M20 4V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
