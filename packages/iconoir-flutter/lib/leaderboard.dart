import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Leaderboard extends StatelessWidget {
  const Leaderboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Leaderboard.svg');
}
