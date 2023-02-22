import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FilterList extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FilterList({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12L17 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 18L13 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
