import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class List extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const List({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6.01L4.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 18.01L4.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
