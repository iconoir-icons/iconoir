import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VoicePhone extends StatelessWidget {
  const VoicePhone({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VoicePhone.svg');
}
