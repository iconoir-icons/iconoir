import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Server extends StatelessWidget {
  const Server({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Server.svg');
}
