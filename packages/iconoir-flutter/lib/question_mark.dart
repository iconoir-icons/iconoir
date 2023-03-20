import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuestionMark extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const QuestionMark({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90039 8.07954C7.90039 3.30678 15.4004 3.30682 15.4004 8.07955C15.4004 11.4886 11.9913 10.8067 11.9913 14.8976" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19.01L12.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
