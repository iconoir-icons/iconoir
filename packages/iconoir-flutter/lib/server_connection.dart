import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ServerConnection extends StatelessWidget {
  const ServerConnection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ServerConnection.svg');
}
