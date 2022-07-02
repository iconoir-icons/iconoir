import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeSale extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HomeSale({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9.84619C13 8.92311 10.3333 8.61542 10.3333 10.4616C10.3333 12.3077 14 11.3847 14 13.2308C14 15.077 11 15.077 10 13.8462" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14.7021V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.11306V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
