import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ListSelect extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ListSelect({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 6.01L5.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12.01L5.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.80005 17.8L4.60005 18.6L6.60004 16.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
