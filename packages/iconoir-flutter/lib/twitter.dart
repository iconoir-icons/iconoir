import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Twitter extends StatelessWidget {
  const Twitter({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Twitter.svg');
}
