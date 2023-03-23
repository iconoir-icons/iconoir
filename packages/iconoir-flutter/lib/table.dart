import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Table extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Table({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3V21H3V3H21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
