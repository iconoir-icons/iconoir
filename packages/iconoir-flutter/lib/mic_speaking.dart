import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MicSpeaking extends StatelessWidget {
  const MicSpeaking({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MicSpeaking.svg');
}
