import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Telegram extends StatelessWidget {
  const Telegram({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Telegram.svg');
}
