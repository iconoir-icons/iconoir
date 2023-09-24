import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AdobeAfterEffectsSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AdobeAfterEffectsSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 17C21.75 19.6234 19.6234 21.75 17 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7C2.25 4.37665 4.37665 2.25 7 2.25H17C19.6234 2.25 21.75 4.37665 21.75 7V17ZM18.25 16C18.25 16.4142 17.9142 16.75 17.5 16.75H16C14.4812 16.75 13.25 15.5188 13.25 14V12C13.25 10.4812 14.4812 9.25 16 9.25C17.5188 9.25 18.75 10.4812 18.75 12V13C18.75 13.4142 18.4142 13.75 18 13.75H14.75V14C14.75 14.6904 15.3096 15.25 16 15.25H17.5C17.9142 15.25 18.25 15.5858 18.25 16ZM17.25 12.25V12C17.25 11.3096 16.6904 10.75 16 10.75C15.3096 10.75 14.75 11.3096 14.75 12V12.25H17.25ZM5.29796 15.7365C5.15252 16.1243 5.34902 16.5566 5.73686 16.702C6.1247 16.8475 6.55701 16.651 6.70245 16.2631L7.64495 13.7498H10.3555L11.298 16.2631C11.4434 16.651 11.8757 16.8475 12.2635 16.702C12.6514 16.5566 12.8479 16.1243 12.7024 15.7365L9.70245 7.73645C9.59268 7.44373 9.31284 7.2498 9.0002 7.2498C8.68757 7.2498 8.40773 7.44373 8.29796 7.73645L5.29796 15.7365ZM9.79295 12.2498H8.20745L9.0002 10.1358L9.79295 12.2498Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
