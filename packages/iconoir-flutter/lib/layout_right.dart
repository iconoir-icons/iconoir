import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LayoutRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LayoutRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M14.25 9.75V21" stroke="currentColor" stroke-width="1.5"/>
<path d="M21 9.75H14.25H3" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
