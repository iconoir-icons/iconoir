import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Discord extends StatelessWidget {
  const Discord({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Discord.svg');
}
