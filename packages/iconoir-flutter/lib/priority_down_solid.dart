import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PriorityDownSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PriorityDownSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3839_8166)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9546 0.893452C12.4274 0.366244 11.5726 0.366246 11.0454 0.893453L0.893941 11.0449C0.366732 11.5721 0.366734 12.4269 0.893941 12.9541L11.0454 23.1056C11.5726 23.6328 12.4274 23.6328 12.9546 23.1056L23.1061 12.9541C23.6333 12.4269 23.6333 11.5721 23.1061 11.0449L12.9546 0.893452ZM12.5303 16.5303C12.3878 16.6729 12.1939 16.752 11.9923 16.75C11.7908 16.7479 11.5986 16.6648 11.459 16.5194L7.45896 12.3527C7.1721 12.0539 7.18179 11.5791 7.4806 11.2923C7.77941 11.0054 8.25419 11.0151 8.54104 11.3139L11.25 14.1358V7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V14.1893L15.4697 11.4697C15.7626 11.1768 16.2374 11.1768 16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L12.5303 16.5303Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3839_8166">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}